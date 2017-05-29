export class Authentication {
    static Login(authority: string, resourceUri: string, clientID: string, returnUri: string): Promise<string> {
        return (<any>window).invokeXamarinAction(`{
            'Library': 'Authentication',
            'Action': 'Login',
            'Parameters': {
                'authority': '` + authority + `',
                'resourceUri': '` + resourceUri + `',
                'clientID': '` + clientID + `',
                'returnUri': '` + returnUri + `'
            }
        }`);
    }

    static Logout(): Promise<string> {
        return (<any>window).invokeXamarinAction(`{
            'Library': 'Authentication',
            'Action': 'Logout',
            'Parameters': {
            }
        }`);
    }

    static getAccessToken(): Promise<string> {
        return (<any>window).invokeXamarinAction(`{
            'Library': 'Authentication',
            'Action': 'GetAccessToken',
            'Parameters': {
            }
        }`);
    }
}
