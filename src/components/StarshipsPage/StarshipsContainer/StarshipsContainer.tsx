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

    const thisPages = () => {
        if (images?.count) {
            const numPages = Math.ceil(images?.count/10)
            let pagesArray = []
            for (let i = 1; i < numPages+1; i++) {
                pagesArray.push(i)
            }
            return (
                pagesArray.map((number, i) => (
                    <div key={i} onClick={() => changePage(number)} className='numberPages'>{number}</div>
                ))
            )
        }
    }

    const changePage = (number: number) => {
        setPage(number)
    }

    return (
        <div className="StarshipsContainer">
            {error && <div>Произошла ошибка при загрузке</div>}
            <div className="articlePage">
                <h1>Starships</h1>
                <div className="paginationDiv">
                    {thisPages()}
                </div>
            </div>
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