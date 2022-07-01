import React, {  useState } from "react"
import { useNavigate } from "react-router-dom";
import { IImage } from "../../../models/IImage";
import { dataAPI } from "../../../services/DataService";
import Variants from "../../../UI/Skeleton/SkeletonForShips/SkeletonForShips";
import StarshipsItem from "../StarshipsItem/StarshipsItem";
import './StarshipsContainer.css'




const StarshipsContainer: React.FC = () => {
    const [limit, setLimit] = useState(9);
    const [page, setPage] = useState(1)
    const navigate = useNavigate()
    const {
        data: images,
        isLoading,
        error
    } = dataAPI.useFetchAllDataQuery([limit, page])


    return (
        <div className="StarshipsContainer">
            {error && <div>Произошла ошибка при загрузке</div>}
            <h1>Starships</h1>
            {isLoading && 
            <div className="ContainerImages skeletons">
                <Variants />
                <Variants />
                <Variants />
                <Variants />
                <Variants />
                <Variants />
            </div>
            }
            <div className="ContainerImages">
                {images?.results.map((image: IImage, i) => (
                    <StarshipsItem image={image} key={i} onClick={(id) => navigate('/starships/' + id)}/>
                ))}
            </div>
        </div>
    )
}


export default StarshipsContainer