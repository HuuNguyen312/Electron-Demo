import React from 'react'
import { ipcRenderer } from 'electron'

import { Wrapper, Main, CloseButton, Title } from './style'

const handleCloseButtonPress = () => {
    ipcRenderer.invoke('close-app')
}

const App: React.FC = () => (
    <Wrapper>
        <Main>
            <Title>Welcome the ReactJS Electron App</Title>
            <CloseButton className='close-button' onClick={handleCloseButtonPress}>
                Close using electron instance
            </CloseButton>
        </Main>
    </Wrapper>
)

export default App
