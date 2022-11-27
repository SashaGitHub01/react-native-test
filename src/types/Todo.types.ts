export interface ITodo {
  id: number;
  title: string;
  status: boolean;
  description?: string;
}

export interface ITodoBody {
  title: string;
  description?: string;
}
