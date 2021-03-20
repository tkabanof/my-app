import s from "./Paginator.module.css"
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from '@material-ui/core/styles';
import {FC, useState} from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(1),
        },
    },
}));

type Props = {
    totalCount: number
    onPageChanged: (value: number) => void

}

const Paginator: FC<Props> = (props) => {

    const classes = useStyles();
    const [page, setPage] = useState(1);
    const handleChange = (event: any, value: number) => {
        setPage(value);
        props.onPageChanged(value);
    };

    return (
        <div className={classes.root}>
            <Pagination count={Math.floor(props.totalCount / 20 + 1)} page={page} onChange={handleChange}/>
        </div>
    );
}

export default Paginator;