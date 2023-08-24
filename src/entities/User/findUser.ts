export function findUser (data : [], login: string, password:string) {
    return data.find(
        (user: any) => user.login === login && user.password === password
    )
}