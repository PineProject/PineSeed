import React, { ReactElement, useContext } from 'react';
import { useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Box, Grid, Typography } from '@material-ui/core';
import { UniverseFormContext } from '../../UniverseFormContainer';
import { UserTagsField } from '../../fields';
import { CloudType, ClusterType } from '../../utils/dto';
import { PROVIDER_FIELD } from '../../utils/constants';
import { useSectionStyles } from '../../universeMainStyle';
import { CloudType } from '../../utils/dto';
import { UniverseFormContext } from '../../UniverseForm';
import { PROVIDER_FIELD } from '../../utils/constants';
import { UserTagsField } from '../../fields';

interface UserTagsProps {}

export const UserTags = (_: UserTagsProps): ReactElement | null => {
  const classes = useSectionStyles();
  const { t } = useTranslation();

  //form context
  const { clusterType } = useContext(UniverseFormContext)[0];

  //field data
  const provider = useWatch({ name: PROVIDER_FIELD });

  if (
    clusterType === ClusterType.PRIMARY &&
    [CloudType.aws, CloudType.gcp, CloudType.azu].includes(provider?.code)
  )
    return (
      <Box>
        <Box className={classes.sectionContainer} borderBottom="0px">
          <Typography className={classes.sectionHeaderFont}>
            {t('universeForm.userTags.title')}
          </Typography>
        </Box>
        <Box mt={2}>
          <Grid container lg={6}>
            <UserTagsField />
          </Grid>
        </Box>
      </Box>
    );

  return null;
};
