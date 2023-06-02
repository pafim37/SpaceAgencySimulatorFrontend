declare interface IData {
    gravitationalConstant: number,
    bodies: Array<IBody>,
    orbits: Array<IOrbit>
}

declare interface IDataProps {
    data: IData,
    setData: (props: React.SetStateAction<IData>) => void;
}

