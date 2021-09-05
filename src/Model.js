import React from 'react'

const Sub = ({marks}) => {
    return (
        <div>
           <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">End Quiz</button>

            <div class="modal fade" id="myModal" role="dialog">
            <div class="modal-dialog">
            
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Your Score :</h4>
                </div>
                <div class="modal-body">
                    <h1 style={{"textAlign" : "center"}}>{marks.reduce((a,b) => a+b,0)}/10</h1>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
                </div>
                
            </div>
            </div>

            <br/>
        </div>
    )
}

export default Sub
