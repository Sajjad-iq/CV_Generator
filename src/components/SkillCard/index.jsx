import { Button } from 'antd';

const SkillCard = ({ SkillTitle, Delete }) => {

    return (
        <div
            style={{ width: "fit-content", boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)', backgroundColor: 'white', padding: "5px", borderRadius: "15px", marginRight: "10px" }}
        >
            {SkillTitle}
            <Button onClick={Delete} type='text'>X</Button>
        </div >
    );
};

export default SkillCard;