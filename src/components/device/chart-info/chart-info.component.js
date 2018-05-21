/*
 * Copyright 2018 Samsung Electronics Co., Ltd. and other contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/fontawesome-free-solid';
import ChartInfoModal from '../chart-info-modal/chart-info-modal.component';

export default class ChartInfo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { project } = this.props;

    return (
      <div className="row mt-2 text-center">
        <div className="col">

          <div className="btn btn-link" data-toggle="modal" data-target={`#${project.key}-chart-info`}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span className="ml-2">Information about the chart&apos;s data</span>
          </div>

          <ChartInfoModal project={project} />

        </div>
      </div>
    );
  }
}

ChartInfo.propTypes = {
  project: PropTypes.object.isRequired,
};
