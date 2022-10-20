export const flowData = {
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
      style: { border: '1px solid #333',  padding: 10, background: '#FFF', borderRadius: '3px' },
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
