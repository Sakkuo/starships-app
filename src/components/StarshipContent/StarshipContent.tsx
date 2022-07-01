import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataAPI } from "../../services/DataService";
import "./StarshipContent.css";
import placeholder from '../../images/big-placeholder.jpg'
import axios from "axios";
import SkeletonForSingle from "../../UI/Skeleton/SkeletonForSingle/SkeletonForSingle";

type UserItemPageParams = {
    id: string;
};

const StarshipContent: React.FC = () => {
    const [url, setUrl] = useState<string>("");
    const [isImage, setIsImage] = useState<boolean>();
    const params = useParams<UserItemPageParams>();
    const { data: starship, isLoading, error } = dataAPI.useFetchSingleDataQuery(params.id);

    console.log(params);

    useEffect(() => {
            setUrl(
                `https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`
            );
            checkImage();
    }, []);

    const checkImage = async () => {
        try {
            await axios.get(
                `https://starwars-visualguide.com/assets/img/starships/${params.id}.jpg`
            );
            setIsImage(true);
        } catch (e) {
            setIsImage(false);
        }
    };
    


    const dataFormatting = () => {
        const str = (starship?.created)?.slice(0, 10).split('-').reverse().join('.')
        return str
    }

    dataFormatting()
    return (
        <div className="StarshipContent">
            {error && <div>Произошла ошибка при загрузке</div>}
            {isLoading && 
            <div>
                <SkeletonForSingle />
            </div>}
            <h1>{starship?.name}</h1>
            <div>
                <div className="ImageAndChar">
                    <div>
                    <img
                        src={isImage ? url : placeholder}
                        className="StarshipImg"
                        alt="Starship"
                    />
                    </div>
                    <div className="StarshipChar">
                        <div>
                            Model: <span>{starship?.model}</span>
                        </div>
                        <div>
                            Name: <span>{starship?.name}</span>
                        </div>
                        <div>
                            Length: <span>{starship?.length}</span>
                        </div>
                        <div>
                            Cost:
                            <span>
                                {starship?.cost_in_credits === "unknown"
                                    ? starship?.cost_in_credits
                                    : `$${starship?.cost_in_credits}`}
                            </span>
                        </div>
                        <div>
                            Created:
                            <span>
                                {dataFormatting()}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="StarshipDescribe">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim
                </div>
            </div>
        </div>
    );
};

export default StarshipContent;
