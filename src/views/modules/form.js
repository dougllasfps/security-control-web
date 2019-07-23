import React, {useState} from 'react'

import DefaultPage from '../../components/template/DefaultPage';
import { inject, observer } from 'mobx-react';
import FormGroup from '../../components/common/formGroup';
import Row from '../../components/common/row';

function ModuleForm({
    modules
}) {

    const [name, setName] = useState('')
    const [label, setLabel] = useState('')

    const onSubmit = () => {
        modules.save({
            name,
            label
        })
    }

    const entity = {modules}

    return(
        <DefaultPage title="Modules" header="New">
            <form>
                <Row>
                    <FormGroup id="name" colsSize={6} label="Name: *">
                        <input type="text" className="form-control" value={entity.name  || name } onChange={e => setName(e.target.value)} />
                    </FormGroup>
                    <FormGroup id="label" colsSize={6} label="Label: *">
                        <input type="text"  className="form-control" value={entity.label  || label } onChange={e => setLabel(e.target.value)} />
                    </FormGroup>
                </Row>
            </form>
        </DefaultPage>
    )
}

export default inject("modules")( observer(ModuleForm) )