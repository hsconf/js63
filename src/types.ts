export interface Post {
    title: string;
    description: string;
    date: string;
}

export interface IPosts extends Post {
    id: string;
}

export interface PostList {
    [id: string]: IPosts;
}