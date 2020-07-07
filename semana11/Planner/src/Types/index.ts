
export interface Task {
  text: string;
  day: string;
  id: string;
  done: boolean
     
}
  export interface DayProps {
    day: string;
  }
    
  export interface TodoItemProps {
    text: string;
    id: string;
    done: boolean
  }

  export interface IsmartReloadContext {
    reloadSwitch: number;
    Load: () => void;
  }

  export interface ProviderProps {
    children: React.ReactNode;
  }

  export interface TodoItemTextProps {
    completion: boolean;
  }