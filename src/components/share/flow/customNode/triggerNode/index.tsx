import React, { memo, useMemo } from 'react';
import { Handle, Position } from 'reactflow';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { Node } from '@/components/share/flow/model/node';

const Wrap = styled(Box)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(5),
  position: 'relative',
}));

const CustomAddIconButton = styled(IconButton)<{
  component?: React.ElementType;
}>(({ theme }) => ({
  position: 'absolute',
  right: `-${theme.spacing(0.5)}`,
  bottom: `-${theme.spacing(0.5)}`,
}));

const TriggerNode: React.FC<any> = memo((node) => {
  const nodeInstance = useMemo(()=>new Node(node),[node]);
  return (
    <>
      <Handle
        type='source'
        position={Position.Right}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={false}
      />
      <Wrap>
        <Typography variant='h6'>{nodeInstance.label}</Typography>
        <CustomAddIconButton
          color='primary'
          aria-label='upload picture'
          component='button'
          onClick={nodeInstance.onAddNodeClick}
        >
          <AddCircleIcon />
        </CustomAddIconButton>
      </Wrap>
    </>
  );
});

export { TriggerNode };
