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
import Typography from '@mui/material/Typography';
import { flowData } from '@/components/flow/dummyData';
// import throttle from 'lodash/throttle';

import { FlowMaster } from '@/components/flow/model/flowMaster';

import { MultiConnectNode } from '@/components/flow/customNode/multiConnectNode';
import { OutputNode } from '@/components/flow/customNode/outputNode';
import { TriggerNode } from '@/components/flow/customNode/triggerNode';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid: [number, number] = [5, 5];
const nodeTypes = {
  multiConnectNode: MultiConnectNode,
  outputNode: OutputNode,
  triggerNode: TriggerNode,
};

const Wrap = styled(Box)(({ theme }) => ({
  height: theme.spacing(40),
  display: 'flex',
  flexDirection: 'column',
}));

const Title = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  backgroundColor: '#1A192B',
  fontWeight: 'bold',
  textAlign: 'left',
  padding: theme.spacing(1),
  borderRadius: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 0`
}));

const Content = () => {
  const theme = useTheme();
  const { setViewport } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const flowInstance = useMemo(() => new FlowMaster(flowData), []);

  const addNodeHandler = useCallback(
    // eslint-disable-next-line
    (data: any) => (_e: any) => {
      if (data.type === 'multiConnectNode') {
        flowInstance.addOutputNode(data);
        setNodes(flowInstance.nodes);
        setEdges(flowInstance.edges);
      }
    },
    [nodes]
  );

  // eslint-disable-next-line
  const removeNodeHandler = (data: any) => (e: any) => {
    flowInstance.removeNode(data);
    setNodes(flowInstance.nodes);
    setEdges(flowInstance.edges);
  };

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
      <Title variant='h2'>ReactFlow Sample</Title>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{
          background: '#1A192B',
          borderRadius: `0 0 ${theme.spacing(0.5)} ${theme.spacing(0.5)}`,
        }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid
        snapGrid={snapGrid}
        // fitView
        defaultViewport={{ x: 0, y: 300, zoom: 0.5 }}
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
