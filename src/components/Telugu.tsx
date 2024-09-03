import React from 'react'

export default function () {
  return (

    <div>
     


    <div>
        <table>
            <tbody>
                <tr>
                    <th 
                        className="sidebar-title" 
                        style={{ background: '#ccccff', fontSize: '110%' }}
                    >
                        <a href="/wiki/Telugu_cinema" title="Telugu cinema">
                            Telugu cinema (Tollywood)
                        </a>
                    </th>
                </tr>
                <tr>
                    <td className="sidebar-image">
                        <span typeof="mw:File">
                            <a 
                                href="/wiki/File:India_film_clapperboard_(variant).svg" 
                                className="mw-file-description"
                            >
                                <img 
                                    src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a6/India_film_clapperboard_%28variant%29.svg/60px-India_film_clapperboard_%28variant%29.svg.png" 
                                    decoding="async" 
                                    width="60" 
                                    height="62" 
                                    className="mw-file-element" 
                                    srcSet="
                                        //upload.wikimedia.org/wikipedia/commons/thumb/a/a6/India_film_clapperboard_%28variant%29.svg/90px-India_film_clapperboard_%28variant%29.svg.png 1.5x, 
                                        //upload.wikimedia.org/wikipedia/commons/thumb/a/a6/India_film_clapperboard_%28variant%29.svg/120px-India_film_clapperboard_%28variant%29.svg.png 2x"
                                    data-file-width="237" 
                                    data-file-height="245"
                                />
                            </a>
                        </span>
                    </td>
                </tr>
                {['1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'].map((decade) => (
                    <React.Fragment key={decade}>
                        <tr>
                            <th 
                                className="sidebar-heading" 
                                style={{ background: '#ccccff', borderTop: '2px solid white', borderBottom: '2px solid white' }}
                            >
                                <a href={`/wiki/List_of_Telugu_films_of_the_${decade}`} title={`List of Telugu films of the ${decade}`}>
                                    {decade}
                                </a>
                            </th>
                        </tr>
                        <tr>
                            <td className="sidebar-content">
                                {Array.from({ length: 10 }, (_, i) => i + 1).map(year => (
                                    <React.Fragment key={year}>
                                        <a href={`/wiki/List_of_Telugu_films_of_${1950 + (year - 1)}`} title={`List of Telugu films of ${1950 + (year - 1)}`}>
                                            {1950 + (year - 1)}
                                        </a> 
                                        {year % 4 === 0 && <br />}
                                    </React.Fragment>
                                ))}
                            </td>
                        </tr>
                    </React.Fragment>
                ))}
                <tr>
                    <td className="sidebar-navbar">
                        <div className="navbar plainlinks hlist navbar-mini">
                            <ul>
                                <li className="nv-view">
                                    <a href="/wiki/Template:Tollywood_film_list" title="Template:Tollywood film list">
                                        <abbr title="View this template">v</abbr>
                                    </a>
                                </li>
                                <li className="nv-talk">
                                    <a href="/wiki/Template_talk:Tollywood_film_list" title="Template talk:Tollywood film list">
                                        <abbr title="Discuss this template">t</abbr>
                                    </a>
                                </li>
                                <li className="nv-edit">
                                    <a href="/wiki/Special:EditPage/Template:Tollywood_film_list" title="Special:EditPage/Template:Tollywood film list">
                                        <abbr title="Edit this template">e</abbr>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
);


 
    </div>
  )
}
