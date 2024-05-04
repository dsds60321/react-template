import { TreeItem, TreeView } from '@mui/x-tree-view';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigation } from '../../../../data/navigation.js';
import { useNavigate } from 'react-router-dom';

const TreeLabel = ({ icon, val }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <FontAwesomeIcon icon={icon} style={{ marginRight: '8px' }} />
      <span>{val}</span>
    </div>
  );
};

const FlexCenter = ({ children }) => {
  return <div style={{ display: 'flex', justifyContent: 'center', margin: '5px' }}>{children}</div>;
};

function Navigation({ open }) {
  let navigate = useNavigate();

  return open ? (
    <TreeView multiSelect>
      {navigation.map((nav, index) => (
        <TreeItem
          key={nav.title}
          nodeId={index.toString()}
          label={<TreeLabel icon={'file-invoice'} val={nav.title} />}
          itemId={index.toString()}
        >
          {nav.item &&
            nav.item.map((item, index) =>
              item.list ? (
                <TreeItem
                  key={`${item.title} ${index}`}
                  nodeId={`${index}-${index}`}
                  label={item.title}
                  itemId={`${item.title} ${index}`}
                >
                  {item.list.map((innerItem, index) => (
                    <TreeItem
                      onClick={() => {
                        navigate(innerItem.url);
                      }}
                      key={`${innerItem.title} ${index}`}
                      nodeId={`${index}-${index}-${index}`}
                      label={innerItem.title}
                      itemId={`${innerItem.title} ${index}`}
                    />
                  ))}
                </TreeItem>
              ) : (
                <>
                  <TreeItem
                    onClick={() => {
                      navigate(item.url);
                    }}
                    key={`${item.title} ${index}`}
                    nodeId={`${index}-${index}`}
                    label={item.title}
                    itemId={`${item.title} ${index}`}
                  />
                </>
              ),
            )}
        </TreeItem>
      ))}
    </TreeView>
  ) : (
    navigation.map((nav) => (
      <div key={nav.title}>
        {
          <FlexCenter>
            <FontAwesomeIcon size={'lg'} icon={nav.icon} />
          </FlexCenter>
        }
      </div>
    ))
  );
}

export default Navigation;
