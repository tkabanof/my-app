import s from "./Paginator.module.css"

const Paginator = (props) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    return(
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : null}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p} </span>
            })}
        </div>
    )
}

export default Paginator;