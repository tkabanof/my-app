import s from "./Paginator.module.css"
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/core/styles';
import {FC, useState} from "react";
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

type Props = {
    totalCount: number
    onPageChanged: (pageNum: number, term: string | undefined, friend?: boolean | undefined) => void

}

const Paginator: FC<Props> = (props) => {

    const classes = useStyles();
    const [page, setPage] = useState(1);

    const history = useHistory()
    const handleChange = (event: any, value: number) => {
        setPage(value);
        props.onPageChanged(value, '10');

        const searchParam = new URLSearchParams(history.location.search)
        searchParam.set('page', String(value))
        history.push({
            pathname: history.location.pathname,
            search: searchParam.toString(),
        })
    };

    return (
        <div className={classes.root}>
            <Pagination count={Math.floor(props.totalCount / 20 + 1)} page={page} onChange={handleChange}/>
        </div>
    );
}

export default Paginator;