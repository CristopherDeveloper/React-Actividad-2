import React, { useState } from "react";
import IconSearch from "../../assets/icon/icon-search-3d.svg"
import "./style.css"
import Films from "./Films";

const Main = () => {
    const [searchTag, setSearchTag] = useState({
        search: ''
    });

    const handleChange = (e) => {
        setSearchTag({
            ...searchTag,
            [e.target.name] : e.target.value
        })
    }

    return(
        <>
            <main className="main">
                <article className="main__articlesearch">
                    <section className="main__sectionsearch">
                        <label name="search" className="main__labelsearch">
                            <img className="main__iconsearch" src={IconSearch} />
                        </label>
                        <input 
                            value={searchTag.search}
                            placeholder="Busqueda" 
                            name="search"
                            className="main__inputsearch" 
                            type="search" 
                            id="search"
                            onChange={(e) => handleChange(e)} 
                        />
                    </section>
                </article>

                <article className="main__films">
                    <Films tag={searchTag.search} title={"Sobre tu busqueda"}/>
                    <Films tag="terror" title={"Horror"}/>
                    <Films tag="accion" title={"Accion"}/>
                </article>
            </main>
        </>
    )
}

export default Main;