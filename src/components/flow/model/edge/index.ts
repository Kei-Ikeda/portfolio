import { Edge as IFEdge } from 'reactflow';

interface IFEdgeData {
  id: string;
  source: string;
  target: string;
  animated?: boolean;
  style?: Record<string, any>;
}

export class Edge {
  private data: IFEdgeData;
  constructor(edge: IFEdge) {
    this.data = edge;
  }
  get source (){
    return this.data.source;
  }
  get target (){
    return this.data.target;
  }
  get currentData() {
    return this.data;
  }
}
