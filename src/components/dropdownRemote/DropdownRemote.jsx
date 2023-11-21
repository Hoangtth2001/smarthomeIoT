import React from 'react'
import Remote from '../remote/Remote'
import './dropdown.scss'
const DropdownRemote = () => {
    return (
            <div class="btn-group dropright btn-remote">
                <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <button type="button" class="btn btn-primary">
                        Điều Khiển thiết bị
                    </button>
                </button>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#"><Remote /></a>
                </div>
            </div>
    )
}

export default DropdownRemote