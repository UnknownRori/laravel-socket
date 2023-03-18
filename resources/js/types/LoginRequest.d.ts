import User from "./User"

type LoginRequest = {
    status: number,
    token: string,
    user: User,
}

export default LoginRequest;
