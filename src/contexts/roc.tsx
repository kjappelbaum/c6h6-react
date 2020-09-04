import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ICouchUser, RocDocument, Roc } from 'rest-on-couch-client';

interface RocState {
  roc: Roc;
  user: ICouchUser;
  sample: RocDocument | null;
}

const rocContext = createContext<RocState | null>(null);

export function useRoc() {
  const roc = useContext(rocContext);
  if (!roc) {
    throw new Error('missing roc');
  }
  return roc;
}

const roc = new Roc({
  url: 'http://test.cheminfo.org/roc',
  database: 'eln',
});

export function RocProvider(props: { children: ReactNode }) {
  const [user, setUser] = useState<ICouchUser>();
  useEffect(() => {
    roc
      .getUser()
      .then(setUser)
      .catch(() => {
        // TODO: handle error
      });
  }, []);

  const [sample, setSample] = useState<RocDocument>();
  useEffect(() => {
    const doc = roc.getDocument('6a6bb043cc1fb7ab0f7a9db4d0995728');
    doc
      .fetch()
      .then(() => setSample(doc))
      .catch(() => {
        // TODO: handle error
      });
  }, []);

  const value = user ? { roc, user, sample: sample || null } : null;

  if (!value) return null;

  return (
    <rocContext.Provider value={value}>{props.children}</rocContext.Provider>
  );
}
