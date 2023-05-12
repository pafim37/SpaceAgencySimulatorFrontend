declare interface IData {
    bodies: Array<IBody>,
    orbits: Array<IOrbit>
}

declare interface IDataProps {
    data: IData,
    setData: (props: React.SetStateAction<IData>) => void;
}

