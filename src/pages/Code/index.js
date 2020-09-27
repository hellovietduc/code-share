import React from 'react';
import CodeArea from '../../components/CodeArea';

const codeString = `
package main

import (
    "fmt"
)

func main() {
    fmt.Println("Hello World")
}
`;

function CodePage() {
  return (
    <CodeArea code={codeString.trim()} language="go" />
  );
}

export default CodePage;
