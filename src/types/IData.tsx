declare interface IData {
    bodies: Array<IBody>,
    orbits: Array<IBody>
}

declare interface IDataProps {
    data: IData,
    setData: (props: React.SetStateAction<IData>) => void;
}

