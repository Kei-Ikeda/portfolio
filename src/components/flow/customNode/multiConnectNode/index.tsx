import React, { memo,useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { Node } from '@/components/flow/model/node';

const Wrap = styled(Box)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(8),
  position: 'relative',
}));

const CustomDeleteIconButton = styled(IconButton)<{
  component?: React.ElementType;
}>(({ theme }) => ({
  position: 'absolute',
  left: `-${theme.spacing(0.5)}`,
  bottom: `-${theme.spacing(0.5)}`,
}));

const CustomAddIconButton = styled(IconButton)<{
  component?: React.ElementType;
}>(({ theme }) => ({
  position: 'absolute',
  right: `-${theme.spacing(0.5)}`,
  bottom: `-${theme.spacing(0.5)}`,
}));

const MultiConnectNode: React.FC<any> = memo((node) => {
  const nodeInstance = useMemo(()=>new Node(node),[node]);
  return (
    <>
      <Handle
        type='target'
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={false}
      />
      <Wrap>
        <Typography variant='h6'>connection</Typography>
        <Typography variant='body1'>notification for →</Typography>
        <CustomDeleteIconButton
          color='primary'
          aria-label='upload picture'
          component='button'
          onClick={nodeInstance.onRemoveNodeClick}
        >
          <HighlightOffIcon />
        </CustomDeleteIconButton>
        <CustomAddIconButton
          color='primary'
          aria-label='upload picture'
          component='button'
          onClick={nodeInstance.onAddNodeClick}
        >
          <AddCircleIcon />
        </CustomAddIconButton>
      </Wrap>
      <Handle
        type='source'
        position={Position.Right}
        style={{ background: '#555' }}
        isConnectable={false}
      />
    </>
  );
});

export { MultiConnectNode };
