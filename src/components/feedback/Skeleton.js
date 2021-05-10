import React from "react";

function Skeleton() {
    return (
        <div>
            <div className="ph-item">
                <div className="ph-col-12">
                    <div className="ph-col-12">
                        <div className="ph-picture"></div>
                    </div>
                    <div className="ph-row">
                        <div className="ph-col-6 big"></div>
                        <div className="ph-col-4 empty big"></div>
                        <div className="ph-col-2 big"></div>
                    </div>
                    <div className="d-flex">
                        <div className="ph-col-1">
                            <div className="ph-avatar img-rounded"></div>
                        </div>
                        <div className="ph-col-10 empty"></div>
                    </div>
                    <div className="ph-row">
                        <div className="ph-col-4"></div>
                        <div className="ph-col-8 empty"></div>
                        <div className="ph-col-6"></div>
                        <div className="ph-col-6 empty"></div>
                        <div className="ph-col-12"></div>
                    </div>
                    <div className="ph-row d-flex justify-content-end">
                        <div className="ph-col-2 big"></div>
                        <div className="ph-col-2 big ml-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skeleton;