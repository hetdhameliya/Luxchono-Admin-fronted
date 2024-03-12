import React, { useState } from 'react'
import "./style.scss"
import PersonIcon from '@mui/icons-material/Person';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import Dialogs from '../../common/Dialogs';
import { STRING } from '../../../constants/String';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

export default function VerifiedAdmin() {

    const [openConfirmation, setOpenConfirmation] = useState(false);

    const handleOpenConfirmation = () => {
        setOpenConfirmation(true);
    };
    const handleCloseConfirmation = () => {
        setOpenConfirmation(false);
    };

    const handleVerify = () => {
        console.log(handleVerify, "handleVerifyhandleVerify")
    }

    return (
        <div className='mains_div'>

            <div className='box_div'>
                <div className='containe'>
                    <div>
                        <PersonIcon className='icon' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <span className='containe_title'>{"het.imps@gmail.com"}</span>
                        </div>
                        <div>
                            <span className='containe_title2'>{"1234567890"}</span>
                        </div>
                    </div>
                </div>

                <div onClick={handleOpenConfirmation}>
                    <CheckCircleOutlinedIcon className='right_icon' />
                </div>
            </div>

            {/* <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", height: "70vh" }}>
                <span style={{ fontWeight: "600", fontSize: "16px" }}>{"Not Data found"}</span>
            </div> */}

            <Dialogs textClose={STRING.DIALOG_CANCEL_BUTTON} textYes={STRING.DIALOG_YES_BUTTON} yesClass={"logout_dialog_yes"} closeClass={"logout_dialog_cancel"} icon={<TaskAltIcon className='text-main !text-[4rem] !mb-[-15px]' />} open={openConfirmation} onClose={handleCloseConfirmation} text={STRING.VERIFY_ADMIB} Action={handleVerify} />

        </div>
    )
}
