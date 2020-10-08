import React from 'react';
import { useLocation } from 'react-router-dom';
import ReadOnlyInput from '../../components/ReadOnlyInput';
import CopyBtn from '../../components/CopyBtn';
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
  const location = useLocation();
  return (
    <section className="container px-5 py-24 mx-auto relative">
      <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <div className="flex flex-wrap justify-center -m-2">
          <div className="p-2">
            <ReadOnlyInput value={location.pathname} />
          </div>
          <div className="p-2">
            <CopyBtn copyValue={location.pathname} />
          </div>
        </div>
      </div>
      <CodeArea code={codeString.trim()} language="go" />
    </section>
  );
}

export default CodePage;
