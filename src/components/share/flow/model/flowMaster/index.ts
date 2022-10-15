import { Node } from '@/components/share/flow/model/node';
import { Edge } from '@/components/share/flow/model/edge';

export class FlowMaster {
  private originallyNodesData;
  private originallyEdgesData;

  private hashedNodesInstanceData;
  private hashedEdgesInstanceData;

  constructor({ nodes, edges }: { nodes: any[]; edges: any[] }) {
    this.originallyNodesData = nodes;
    this.originallyEdgesData = edges;

    this.hashedNodesInstanceData = nodes.reduce<Record<string, Node>>(
      (acc, node) => {
        return { ...acc, [node.id]: new Node(node) };
      },
      {}
    );

    this.hashedEdgesInstanceData = edges.reduce<Record<string, Edge>>(
      (acc, edge) => {
        return { ...acc, [edge.id]: new Edge(edge) };
      },
      {}
    );
  }

  get nodes() {
    return Object.values(this.hashedNodesInstanceData).map(
      (node) => node.currentData
    );
  }

  get edges() {
    return Object.values(this.hashedEdgesInstanceData).map(
      (edges) => edges.currentData
    );
  }

  private setAddNodeHandler(arg: any) {
    Object.values(this.hashedNodesInstanceData).forEach((nodeInstance) => {
      if (nodeInstance.hasAddNode) {
        // eslint-disable-next-line
        nodeInstance.setAddNodeOnClickHandler = arg;
      }
    });
  }

  private setRemoveHandler(arg: any) {
    Object.values(this.hashedNodesInstanceData).forEach((nodeInstance) => {
      if (nodeInstance.hasRemoveNode) {
        // eslint-disable-next-line
        nodeInstance.setRemoveOnClickHandler = arg;
      }
    });
  }

  public setAddRemoveNodeHandler(addNodeHandler: any, removeNodeHandler: any) {
    this.setAddNodeHandler(addNodeHandler);
    this.setRemoveHandler(removeNodeHandler);
  }

  private findNodeById(id: string) {
    return this.hashedNodesInstanceData[id];
  }

  private findEdgeById(id: string) {
    return this.hashedEdgesInstanceData[id];
  }

  private findChildNodeById(id: string) {
    return Object.values(this.hashedEdgesInstanceData)
      .filter((edge) => edge.source === id)
      .reduce((acc, edge) => {
        return {
          ...acc,
          [edge.target]: this.hashedNodesInstanceData[edge.target],
        };
      }, {});
  }

  private findLowestNodePosition(id: string) {
    const targetNodes = this.findChildNodeById(id);
    const lowestTarget: Node =
      targetNodes[
        Object.keys(targetNodes).reduce((a, b) =>
          (targetNodes[a as keyof typeof targetNodes] as Node).positionY >
          (targetNodes[b as keyof typeof targetNodes] as Node).positionY
            ? a
            : b
        ) as keyof typeof targetNodes
      ];
    return lowestTarget?.positionY;
  }

  public addOutputNode(data: any) {
    const referencePosition = this.findLowestNodePosition(data.id);
    const sourceNodeData = {
      id: '123',
      type: 'outputNode',
      data: {
        label: 'Mail',
        settings: { address: 'hoge@sample.com' },
        hasAddNode: false,
        hasRemoveNode: true,
      },
      style: { padding: 10, background: '#FFF', borderRadius: '3px' },
      position: { x: 800, y: referencePosition + 100 },
    };

    const sourceEdgeData = {
      id: `e${data.id}-123`,
      source: data.id,
      target: '123',
      animated: true,
      style: { stroke: '#fff' },
    };

    this.hashedNodesInstanceData = {
      ...this.hashedNodesInstanceData,
      [sourceNodeData.id]: new Node(sourceNodeData),
    };
    this.hashedEdgesInstanceData = {
      ...this.hashedEdgesInstanceData,
      [sourceEdgeData.id]: new Edge(sourceEdgeData),
    };
  }

  public update({ nodes, edges }: { nodes: any[]; edges: any[] }) {
    this.originallyNodesData = nodes;
    this.originallyEdgesData = edges;

    this.hashedNodesInstanceData = nodes.reduce<Record<string, Node>>(
      (acc, node) => {
        return { ...acc, [node.id]: new Node(node) };
      },
      {}
    );

    this.hashedEdgesInstanceData = edges.reduce<Record<string, Edge>>(
      (acc, edge) => {
        return { ...acc, [edge.id]: new Edge(edge) };
      },
      {}
    );
  }
}
