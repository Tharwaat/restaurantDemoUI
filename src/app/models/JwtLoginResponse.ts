export class JwtLoginResponse {
    accessToken: string;
    tokenType: string;
    email: string;
    authorities: string[];
}