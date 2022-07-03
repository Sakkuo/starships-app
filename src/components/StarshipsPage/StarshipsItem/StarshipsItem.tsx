import { useEffect, useState } from "react";
import { IImage } from "../../../models/IImage";
import placeholder from "../../../images/big-placeholder.jpg";
import axios from "axios";
import "./StarshipsItem.css";

interface ImageItemPros {
    image: IImage;
    onClick: (id: string | undefined) => void
}

const StarshipsItem: React.FC<ImageItemPros> = ({ image, onClick }) => {
    const [id, setId] = useState<string>();
    const [url, setUrl] = useState<string>("");
    const [isImage, setIsImage] = useState<boolean>();

    useEffect (() => {
        getStarshipsId()
    }, [image])

    useEffect(() => {
        getStarshipsId();
        if (id) {
            setUrl(
                `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
            );
            checkImage();
        }
    }, [id]);

    const checkImage = async () => {
        try {
            await axios.get(
                `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
            );
            setIsImage(true);
        } catch (e) {
            setIsImage(false);
        }
    };

    const getStarshipsId = () => {
        const id = image.url
            .replace("https://swapi.dev/api/starships/", "")
            .replace("/", "");
        setId(id);
    };

    console.log(id)
    return (
        <div className="StarshipCard">
                <div onClick={() => onClick(id)}>
                    <img
                        src={isImage ? url : placeholder}
                        className="StarshipImage"
                        alt="Starship"
                    />
                    <div className="StarshipText">
                        <div>
                            Cost:
                            <span>
                                {image.cost_in_credits === "unknown"
                                    ? image.cost_in_credits
                                    : `$${image.cost_in_credits}`}
                            </span>
                        </div>
                        <div>
                            Name: <span>{image.name}</span>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default StarshipsItem;
