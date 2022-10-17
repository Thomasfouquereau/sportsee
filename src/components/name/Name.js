import style from './name.module.css';
import PropTypes from 'prop-types';

const UserInfo = (props) => {
    return (
        <div className={style.container}>
            <h1 className={style.userName}>Bonjour <b className={style.Name} >{props.firstName}</b> </h1>
            <p className={style.description}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    )
};

UserInfo.propTypes = {
    name: PropTypes.string
  };

export default UserInfo;