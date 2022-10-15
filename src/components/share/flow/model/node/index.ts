import { Node as IFNode } from 'reactflow';

interface IFNodeData extends IFNode {
  id: string;
  type?: string;
  data: {
    label?: string;
    hasAddNode: boolean;
    hasRemoveNode: boolean;

    onAddNodeClick?: (data: IFNode) => (e: any) => void;
    onRemoveNodeClick?: (data: IFNode) => (e: any) => void;
  };
  style?: Record<string, any>;
  position: { x: number; y: number };
}

export class Node {
  private data: IFNodeData;

  constructor(node: IFNode) {
    this.data = node;
  }

  get currentData() {
    return this.data;
  }

  get label() {
    return this.data.data.label;
  }

  get positionX(){
    return this.data.position.x;
  }

  get positionY(){
    return this.data.position.y;
  }

  get hasAddNode() {
    return this.data.data.hasAddNode;
  }

  get hasRemoveNode() {
    return this.data.data.hasRemoveNode;
  }

  get onAddNodeClick() {
    if(!this.data.data.onAddNodeClick)return undefined;
    return this.data.data.onAddNodeClick(this.data);
  }

  get onRemoveNodeClick() {
    if(!this.data.data.onRemoveNodeClick)return undefined;
    return this.data.data.onRemoveNodeClick(this.data);
  }

  set setAddNodeOnClickHandler(arg: any) {
    this.data.data.onAddNodeClick = arg;
  }

  set setRemoveOnClickHandler(arg: any) {
    this.data.data.onRemoveNodeClick = arg;
  }
}
