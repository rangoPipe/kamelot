

class Constantes {
    public urlDB = `mongodb+srv://${process.env.USERDB}:${process.env.PASSDB}@${process.env.CLUSTERDB}/${process.env.DBNAME}?retryWrites=true&w=majority`;
}

export const constantes = new Constantes();