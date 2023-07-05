import {NodeState, NodeType} from '@graphqlTypes';
import classNames from 'classnames';
import React, {SVGProps} from 'react';

import {readableJobState} from '@dash-frontend/lib/jobs';
import readablePipelineState from '@dash-frontend/lib/readablePipelineState';
import {Node as GraphQLNode} from '@dash-frontend/lib/types';
import {
  NODE_INPUT_REPO,
  NODE_HEIGHT,
  NODE_WIDTH,
} from '@dash-frontend/views/Project/constants/nodeSizes';
import {
  SuccessCheckmark,
  RepoSVG,
  PipelineSVG,
  LockSVG,
  JobsSVG,
  StatusPausedSVG,
  StatusWarningSVG,
  StatusCheckmarkSVG,
  SpinnerSVG,
} from '@pachyderm/components';

import NodeTooltip from './components/NodeTooltip';
import {ReactComponent as EgressSVG} from './DagEgress.svg';
import useNode from './hooks/useNode';
import styles from './Node.module.css';

interface NodeIconProps extends SVGProps<SVGSVGElement> {
  state: GraphQLNode['nodeState'];
}

const NodeStateIcon = ({state, ...rest}: NodeIconProps) => {
  switch (state) {
    case NodeState.ERROR:
      return <StatusWarningSVG color="var(--pachyderm-red)" {...rest} />;
    case NodeState.RUNNING:
    case NodeState.BUSY:
      return <SpinnerSVG {...rest} />;
    case NodeState.PAUSED:
      return <StatusPausedSVG {...rest} />;
    case NodeState.IDLE:
    case NodeState.SUCCESS:
      return <StatusCheckmarkSVG color="var(--icon-green)" {...rest} />;
    default:
      return null;
  }
};

type NodeProps = {
  node: GraphQLNode;
  isInteractive: boolean;
  hideDetails?: boolean;
  showSimple?: boolean;
};

const BUTTON_HEIGHT = 32;
const BUTTON_MARGIN = 4;
const STATUS_BUTTON_HEIGHT = 48;
const STATUS_BUTTON_WIDTH = (NODE_WIDTH - BUTTON_MARGIN * 3) / 2;

const BORDER_RADIUS = 3;
const BUTTON_WIDTH = NODE_WIDTH - BUTTON_MARGIN * 2;
const BUTTON_X_LENGTH = BUTTON_WIDTH - BORDER_RADIUS * 2;
const BUTTON_Y_LENGTH = BUTTON_HEIGHT - BORDER_RADIUS;

const BORDER_RADIUS_TOP_LEFT = `q0,-${BORDER_RADIUS} ${BORDER_RADIUS},-${BORDER_RADIUS}`;
const BORDER_RADIUS_TOP_RIGHT = `q${BORDER_RADIUS},0 ${BORDER_RADIUS},${BORDER_RADIUS}`;
const BORDER_RADIUS_BOTTOM_RIGHT = `q${BORDER_RADIUS},0 ${BORDER_RADIUS},-${BORDER_RADIUS}`;
const BORDER_RADIUS_BOTTOM_LEFT = `q0,${BORDER_RADIUS} ${BORDER_RADIUS},${BORDER_RADIUS}`;

const TOP_ROUNDED_BUTTON_PATH = `M0,${
  BUTTON_Y_LENGTH + BUTTON_MARGIN
} v-${BUTTON_Y_LENGTH} ${BORDER_RADIUS_TOP_LEFT} h${BUTTON_X_LENGTH} ${BORDER_RADIUS_TOP_RIGHT} v${BUTTON_Y_LENGTH} z`;
const BOTTOM_ROUNDED_BUTTON_PATH = `M0,0 v${BUTTON_Y_LENGTH} ${BORDER_RADIUS_BOTTOM_LEFT} h${BUTTON_X_LENGTH} ${BORDER_RADIUS_BOTTOM_RIGHT} v-${BUTTON_Y_LENGTH} z`;

const textElementProps = {
  fontSize: '14px',
  fontWeight: '600',
  textAnchor: 'start',
  dominantBaseline: 'middle',
  className: 'nodeLabel',
};

const Node: React.FC<NodeProps> = ({
  node,
  isInteractive,
  hideDetails = false,
  showSimple = false,
}) => {
  const {
    isHovered,
    onClick,
    onMouseOut,
    onMouseOver,
    repoSelected,
    pipelineSelected,
    groupName,
    isEgress,
    showSuccess,
  } = useNode(node, isInteractive, hideDetails);

  const pipelineClasses = classNames(styles.buttonGroup, {
    [styles.interactive]: isInteractive,
    [styles.selected]: pipelineSelected,
    [styles.access]: node.access,
  });

  const repoClasses = classNames(styles.buttonGroup, {
    [styles.interactive]: isInteractive,
    [styles.selected]: repoSelected,
    [styles.access]: node.access,
  });

  const statusClasses = classNames(styles.statusGroup, {
    [styles.interactive]: isInteractive,
    [styles.access]: node.access,
  });

  const statusTextClasses = (state?: NodeState) =>
    classNames({
      [styles.errorText]: NodeState.ERROR === state,
      [styles.successText]:
        state && [NodeState.IDLE, NodeState.SUCCESS].includes(state),
    });

  if (node.type === NodeType.INPUT_REPO) {
    return (
      <g
        role="button"
        aria-label={`${groupName} repo`}
        className={repoClasses}
        id={groupName}
        transform={`translate (${node.x}, ${node.y})`}
        onClick={() => onClick('repo')}
      >
        <rect
          className={classNames(styles.node, styles.roundedButton, {
            [styles.repoSimplifiedBox]: showSimple,
          })}
          width={NODE_WIDTH}
          height={NODE_INPUT_REPO}
          rx={showSimple ? 15 : 3}
          ry={showSimple ? 15 : 3}
        />
        {!hideDetails && (
          <>
            <text {...textElementProps} />
            <g transform="scale(0.75)">
              {node.access ? (
                <RepoSVG x={15} y={21} />
              ) : (
                <LockSVG color="var(--disabled-tertiary)" x={15} y={23} />
              )}
            </g>
          </>
        )}
      </g>
    );
  }

  if (isEgress) {
    return (
      <g
        role="button"
        aria-label={`${groupName} egress`}
        id={groupName}
        transform={`translate (${node.x + 70}, ${node.y - 30})`}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={() => onClick('pipeline')}
      >
        <SuccessCheckmark show={showSuccess} x={155} y={10} />
        {NodeType.EGRESS === node.type && (
          <NodeTooltip node={node} show={isHovered} />
        )}
        <EgressSVG />
      </g>
    );
  }

  return (
    <g id={groupName} transform={`translate (${node.x}, ${node.y})`}>
      <defs>
        <path id="topRoundedButton" d={TOP_ROUNDED_BUTTON_PATH} />
        <path id="bottomRoundedButton" d={BOTTOM_ROUNDED_BUTTON_PATH} />
        <clipPath id="topRoundedButtonOnly">
          <use xlinkHref="#topRoundedButton" />
        </clipPath>
        <clipPath id="bottomRoundedButtonOnly">
          <use xlinkHref="#bottomRoundedButton" />
        </clipPath>
      </defs>
      <rect
        width={NODE_WIDTH}
        height={NODE_HEIGHT}
        className={classNames(styles.node, {
          [styles.detailedError]:
            !showSimple && node.nodeState === NodeState.ERROR,
          [styles.pipelineSimplifiedBox]:
            showSimple && node.jobNodeState !== NodeState.ERROR,
          [styles.pipelineSimplifiedBoxError]:
            showSimple && node.jobNodeState === NodeState.ERROR,
        })}
        rx={showSimple ? 20 : 3}
        ry={showSimple ? 20 : 3}
      />
      {hideDetails && !showSimple && node.jobNodeState === NodeState.ERROR && (
        <g transform="scale (1.75)">
          <NodeStateIcon state={node.jobNodeState} x={45} y={17} />
          <JobsSVG x={70} y={17} />
        </g>
      )}
      {!hideDetails && (
        <>
          {/* wrapper rectangle */}
          <rect
            width={BUTTON_WIDTH}
            height={BUTTON_HEIGHT * 2}
            className={styles.repoPipelineButtonsBorder}
            rx={BORDER_RADIUS}
            ry={BORDER_RADIUS}
            x={BUTTON_MARGIN}
            y={BUTTON_MARGIN}
          />

          {/* pipeline button */}
          <g
            role="button"
            aria-label={`${groupName} pipeline`}
            id="pipelineButtonGroup"
            transform={`translate (${BUTTON_MARGIN}, ${BUTTON_MARGIN - 1})`}
            onClick={() => onClick('pipeline')}
            className={pipelineClasses}
          >
            <use
              xlinkHref="#topRoundedButton"
              clipPath="url(#topRoundedButtonOnly)"
              className={styles.roundedButton}
            />

            <g transform="scale(0.75)">
              {node.access ? (
                <PipelineSVG x={11} y={12} />
              ) : (
                <LockSVG color="var(--disabled-tertiary)" x={11} y={12} />
              )}
            </g>
            <text {...textElementProps} />
          </g>

          {/* repo button */}
          <g
            role="button"
            aria-label={`${groupName} repo`}
            id="repoButtonGroup"
            transform={`translate (${BUTTON_MARGIN}, ${
              BUTTON_MARGIN + BUTTON_HEIGHT
            })`}
            onClick={() => onClick('repo')}
            className={repoClasses}
          >
            <use
              xlinkHref="#bottomRoundedButton"
              clipPath="url(#bottomRoundedButtonOnly)"
              className={styles.roundedButton}
            />

            <g transform="scale(0.75)">
              {node.access ? (
                <RepoSVG x={11} y={11} />
              ) : (
                <LockSVG color="var(--disabled-tertiary)" x={11} y={11} />
              )}
            </g>
            <text {...textElementProps} className="" x={30} y={17}>
              Output
            </text>
          </g>

          {/* pipeline status button */}
          <g
            role="button"
            aria-label={`${groupName} status`}
            id="pipelineStatusGroup"
            data-testid={`Node__state-${node.nodeState}`}
            transform={`translate (${
              BUTTON_MARGIN * 2 + STATUS_BUTTON_WIDTH
            }, ${BUTTON_MARGIN * 2.5 + BUTTON_HEIGHT * 2})`}
            onClick={() => onClick('status')}
            className={statusClasses}
          >
            <rect
              width={STATUS_BUTTON_WIDTH}
              height={STATUS_BUTTON_HEIGHT}
              rx={3}
              ry={3}
              className={styles.statusRect}
            />
            <text
              style={{
                fontSize: '12px',
                fontWeight: '400',
                textAnchor: 'start',
                dominantBaseline: 'middle',
                fontFamily: 'Montserrat',
                fill: '#666',
              }}
              x={BUTTON_MARGIN * 2 + 2}
              y={16}
            >
              Pipeline
            </text>

            <text
              x={BUTTON_MARGIN * 2 + 20}
              y={40}
              className={statusTextClasses(node.nodeState)}
            >
              {node.state && readablePipelineState(node.state)}
            </text>
            <g transform="scale(0.6)">
              <NodeStateIcon
                state={node.nodeState}
                x={(BUTTON_MARGIN * 2 + 2) / 0.6}
                y={48}
              />
            </g>
          </g>

          {/* job status button */}
          {node.jobNodeState !== NodeState.IDLE && (
            <g
              role="button"
              aria-label={`${groupName} logs`}
              id="jobStatusGroup"
              data-testid={`Node__state-${node.jobNodeState}`}
              transform={`translate (${BUTTON_MARGIN}, ${
                BUTTON_MARGIN * 2.5 + BUTTON_HEIGHT * 2
              })`}
              onClick={() => onClick('logs')}
              className={statusClasses}
            >
              <rect
                width={STATUS_BUTTON_WIDTH}
                height={STATUS_BUTTON_HEIGHT}
                rx={3}
                ry={3}
                className={styles.statusRect}
              />
              <text
                style={{
                  fontSize: '12px',
                  fontWeight: '400',
                  textAnchor: 'start',
                  dominantBaseline: 'middle',
                  fontFamily: 'Montserrat',
                  fill: '#666',
                }}
                className={styles.subLabel}
                x={BUTTON_MARGIN * 2 + 2}
                y={16}
              >
                Subjob
              </text>

              <text
                x={BUTTON_MARGIN * 2 + 20}
                y={40}
                className={statusTextClasses(node.jobNodeState)}
              >
                {node.jobState && readableJobState(node.jobState)}
              </text>
              <g transform="scale(0.6)">
                <NodeStateIcon
                  state={node.jobNodeState}
                  x={(BUTTON_MARGIN * 2 + 2) / 0.6}
                  y={48}
                />
              </g>
            </g>
          )}
        </>
      )}
    </g>
  );
};

export default Node;
