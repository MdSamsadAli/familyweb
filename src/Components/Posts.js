import { useState } from "react"
import ItemList from "./Posts.jsx"

export const Post = () =>{
    const [List, setList] = useState(ItemList)

    const filterData = (Item) => {
        const data = ItemList.filter((curDate) =>
        {
            return curDate.callItem === Item
        });
        setList(data)
    }
    return (
        <>
            <section className="post_section" id="post">
                <div className="w-80">
                    <div className="post_container row">
                        <div className="post mt-5">
                            <div className="all_posts p-1 d-flex justify-content-between">
                                <div>
                                    <a href="" onClick={() =>setList(ItemList)}>All Post</a>
                                </div>
                                <div className="navigation">
                                    <button onClick={() =>setList(ItemList)}>all</button>
                                    <button onClick={() => filterData('food')}>admin</button>
                                    <button onClick={() => filterData('cook')}>office</button>
                                </div>
                                <div>
                                    <i class="fa-solid fa-magnifying-glass"></i>
                                </div>
                            </div>
                            <div className="row p-1 justify-content-around">
                                {List.map((curElem) =>{
                                    return(
                                    <div className="col-4 col-5 post_box mt-4">
                                        <div className="post_img-box">
                                            <img src={curElem.image} alt="kidswithfamily" />
                                        </div>
                                        <div className="txt-box">
                                            <div className="icon d-flex justify-content-between">
                                                <div className="d-flex align-center">
                                                    <div className="circle">
                                                        <i class="fa-solid fa-circle-user"></i>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span>{curElem.admin}</span>
                                                        <span>{curElem.date} <sup>.</sup> {curElem.time} </span>
                                                    </div>
                                                </div>
                                                <div className="three-dots">
                                                    <i class="fa-solid fa-ellipsis-vertical"></i>
                                                </div>
                                            </div>
                                            <div className="txt-content">
                                                <h2>{curElem.title}</h2>
                                                <p>{curElem.description}</p>
                                            </div>
                                        </div>
                                        <div className="w-80 d-flex justify-content-between align-center">
                                            <div className="d-flex">
                                                <p className="mr-1"> {curElem.views} <span >Veiws</span></p>
                                                <p className="mr-1">{curElem.comments} <span >Comments</span></p>
                                            </div>
                                            <div>
                                                <p>{curElem.hearts} <span className="heart">&hearts;</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}