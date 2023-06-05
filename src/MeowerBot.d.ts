export interface Message {
    cmd: string;
    val: any;
}

// export interface Context {}

declare class Bot {
    login(username: string, password: string, server?: string, prefix?: string);
    post(content: string, origin?: string | null): void;
    onPost(callback: () => void): void;
    onClose(callback: () => void): void;
    onMessage(callback: () => void): void;
    onLogin(callback: () => void): void;
    onCommand(command: string, callback: (ctx: Context) => void): void;
    send(message: Message): void;
    close(): void;
    onCommandMiddleware(callback: (ctx: any) => boolean): void;
}

export = Bot;
