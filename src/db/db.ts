
export interface ConnectionParams{
    useNewUrlParser: boolean
    autoIndex: boolean
}

export interface DBConfig {
    url : string,
    params: ConnectionParams
}



