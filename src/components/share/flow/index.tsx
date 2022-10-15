import { useEffect, useCallback, useMemo } from 'react';
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  // MiniMap,
  Controls,
  Connection,
  // Position,
  Background,
  ReactFlowProvider,
  useReactFlow,
  Node,
  Edge,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import throttle from 'lodash/throttle';

import { FlowMaster } from '@/components/share/flow/model/flowMaster';

import { MultiConnectNode } from '@/components/share/flow/customNode/multiConnectNode';
import { OutputNode } from '@/components/share/flow/customNode/outputNode';
import { TriggerNode } from '@/components/share/flow/customNode/triggerNode';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid: [number, number] = [5, 5];
const nodeTypes = {
  multiConnectNode: MultiConnectNode,
  outputNode: OutputNode,
  triggerNode: TriggerNode,
};

const Wrap = styled(Box)(({ theme }) => ({
  height: theme.spacing(40),
}));

const flowData = {
  nodes: [
    {
      id: '1',
      type: 'triggerNode',
      data: { label: 'Trigger', hasAddNode: true, hasRemoveNode: false },
      style: { padding: 10, background: '#FFF', borderRadius: '3px' },
      position: { x: 30, y: 50 },
    },
    {
      id: '2',
      type: 'multiConnectNode',
      data: { hasAddNode: true, hasRemoveNode: true },
      style: { padding: 10, background: '#FFF', borderRadius: '3px' },
      position: { x: 400, y: 50 },
    },
    {
      id: '3',
      type: 'outputNode',
      data: {
        label: 'Slack',
        settings: { api: '523523632512' },
        hasAddNode: false,
        hasRemoveNode: true,
      },
      style: { padding: 10, background: '#FFF', borderRadius: '3px' },
      position: { x: 800, y: 50 },
    },
    {
      id: '4',
      type: 'outputNode',
      data: {
        label: 'Mail',
        settings: { address: 'hoge@sample.com' },
        hasAddNode: false,
        hasRemoveNode: true,
      },
      style: { padding: 10, background: '#FFF', borderRadius: '3px' },
      position: { x: 800, y: 150 },
    },
  ],
  edges: [
    {
      id: 'e1-2',
      source: '1',
      target: '2',
      animated: true,
      style: { stroke: '#fff' },
    },
    {
      id: 'e2-3',
      source: '2',
      target: '3',
      // sourceHandle: 'a',
      animated: true,
      style: { stroke: '#fff' },
    },
    {
      id: 'e2-4',
      source: '2',
      target: '4',
      // sourceHandle: 'b',
      animated: true,
      style: { stroke: '#fff' },
    },
  ],
};

// eslint-disable-next-line
const removeNodeHandler = (data: any) => (e: any) => {
  console.log('data', data);
  console.log('remove event', e);
  alert('remove node exec');
};

const Content = () => {
  const theme = useTheme();
  const { setViewport } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const flowInstance = useMemo(() => new FlowMaster(flowData), []);

  const addNodeHandler = useCallback((data: any) => (e: any) => {
    if (data.type === 'multiConnectNode') {
      flowInstance.addOutputNode(data);
      setNodes(flowInstance.nodes);
      setEdges(flowInstance.edges);
    }
  },[nodes]);

  useEffect(() => {
    setNodes(flowInstance.nodes);
    setEdges(flowInstance.edges);
  }, [setEdges, setNodes, flowInstance]);

  useEffect(() => {
    flowInstance.setAddRemoveNodeHandler(addNodeHandler, removeNodeHandler);
  }, [flowInstance, addNodeHandler]);

  useEffect(() => {
    setViewport({ x: 0, y: 0, zoom: 0.8 }, { duration: 800 });
  }, [setViewport]);

  const updateFlowInstance = (newNodes: Node[], newEdges: Edge[]): any => {
    if (!(newNodes.length && newEdges.length)) return false;
    flowInstance.update({ nodes, edges });
    return true;
  };

  useEffect(() => {
    updateFlowInstance(nodes, edges);
  }, [nodes, edges]);

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)
      ),
    [setEdges]
  );

  return (
    <Wrap>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: '#1A192B', borderRadius: theme.spacing(1) }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid
        snapGrid={snapGrid}
        // fitView
        // defaultViewport={{ x: 0, y: 300, zoom: 0.5 }}
        // attributionPosition='bottom-left'
      >
        {/* <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'selectorNode') return bgColor;
            if (n.type === 'output') return '#ff0072';
            return '#FFF';
          }}
          nodeColor={(n) => {
            if (n.type === 'selectorNode') return bgColor;
            return '#fff';
          }}
        /> */}
        <Controls />
        <Background color='#aaa' gap={16} />
      </ReactFlow>
    </Wrap>
  );
};

const Flow = () => (
  <ReactFlowProvider>
    <Content />
  </ReactFlowProvider>
);

export { Flow };
