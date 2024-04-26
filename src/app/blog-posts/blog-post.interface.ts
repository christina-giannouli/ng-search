interface Attributes {
  title: string;
  body: string;
  name: string;
  created: string;
  updated: string;
}

interface Relationships {
  author: {
    data: { id: string; type: string };
  };
}

export interface PostData {
  type: string;
  id: string;
  attributes: Omit<Attributes, 'name'>;
  relationships: Relationships;
}

export interface PostIncluded {
  type: string;
  id: string;
  attributes: Pick<Attributes, 'name'>;
}

export interface BlogPost {
  data: Array<PostData>;
  included: Array<PostIncluded>;
}
