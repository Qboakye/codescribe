import { useState } from 'react';
import { Center, Divider, Heading, VStack } from "@chakra-ui/react";
import CodeMirror from '@uiw/react-codemirror';

function App() {
  const [text, setText] = useState("print(\"Hello world!\")");
  return (
    <div className="App">
      <Center h={"100vh"}>
        <VStack boxShadow={'md'} p={4} borderStyle={"solid"} borderWidth={1} rounded={"lg"}>
          <Heading>Code Editor</Heading>
          <Divider />
          <CodeMirror
            value={text}
            onChange={(newValue) => setText(newValue)}
            //theme={githubLight}
            //extensions={[python()]}
            basicSetup={{ autocompletion: true }}
            minWidth={'500px'}
            minHeight={'500px'}
          />
        </VStack>
      </Center>
    </div>
  );
}

export default App;
