import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReadOnlyInput from '../../components/ReadOnlyInput';
import CopyBtn from '../../components/CopyBtn';
import CodeArea from '../../components/CodeArea';
import getCode from '../../utils/request';

function CodePage() {
  const { pathname } = useLocation();
  const [codeString, setCodeString] = useState('');

  useEffect(() => {
    const fetchCode = async () => {
      const code = await getCode(pathname.replace('/', ''));
      setCodeString(code || null);
    };
    fetchCode();
  }, [pathname]);

  return (
    <section className="container px-5 py-24 mx-auto relative">
      {
        codeString === null
          ? (
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-center">Code Not Found</p>
          )
          : (
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap justify-center">
                <ReadOnlyInput value={window.location.href} />
                <CopyBtn copyValue={window.location.href} />
              </div>
              <CodeArea code={codeString.trim()} />
            </div>
          )
      }
    </section>
  );
}

export default CodePage;
