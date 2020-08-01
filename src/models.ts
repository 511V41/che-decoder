export interface OKE {
}

export interface Meta {
  name: string;
  nickname: string;
}

export interface Position {
  x: number;
  y: number;
}

export interface Team {
  name: string;
  owner: string;
  okes: (OKE | undefined)[];
}
