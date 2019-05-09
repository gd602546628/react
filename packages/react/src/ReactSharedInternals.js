/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import assign from 'object-assign';
<<<<<<< HEAD
import * as Scheduler from 'scheduler';
import * as SchedulerTracing from 'scheduler/tracing';
=======
import {
  unstable_cancelCallback,
  unstable_shouldYield,
  unstable_now,
  unstable_scheduleCallback,
  unstable_runWithPriority,
  unstable_next,
  unstable_getFirstCallbackNode,
  unstable_pauseExecution,
  unstable_continueExecution,
  unstable_wrapCallback,
  unstable_getCurrentPriorityLevel,
  unstable_IdlePriority,
  unstable_ImmediatePriority,
  unstable_LowPriority,
  unstable_NormalPriority,
  unstable_UserBlockingPriority,
} from 'scheduler';
import {
  __interactionsRef,
  __subscriberRef,
  unstable_clear,
  unstable_getCurrent,
  unstable_getThreadID,
  unstable_subscribe,
  unstable_trace,
  unstable_unsubscribe,
  unstable_wrap,
} from 'scheduler/tracing';
>>>>>>> 29b7b775f2ecf878eaf605be959d959030598b07
import ReactCurrentDispatcher from './ReactCurrentDispatcher';
import ReactCurrentOwner from './ReactCurrentOwner';
import ReactDebugCurrentFrame from './ReactDebugCurrentFrame';

const ReactSharedInternals = {
  ReactCurrentDispatcher,
  ReactCurrentOwner,
  // used by act()
  ReactShouldWarnActingUpdates: {current: false},
  // Used by renderers to avoid bundling object-assign twice in UMD bundles:
  assign,
};

if (__UMD__) {
  // Re-export the schedule API(s) for UMD bundles.
  // This avoids introducing a dependency on a new UMD global in a minor update,
  // Since that would be a breaking change (e.g. for all existing CodeSandboxes).
  // This re-export is only required for UMD bundles;
  // CJS bundles use the shared NPM package.
  Object.assign(ReactSharedInternals, {
<<<<<<< HEAD
    Scheduler,
    SchedulerTracing,
=======
    Scheduler: {
      unstable_cancelCallback,
      unstable_shouldYield,
      unstable_now,
      unstable_scheduleCallback,
      unstable_runWithPriority,
      unstable_next,
      unstable_wrapCallback,
      unstable_getFirstCallbackNode,
      unstable_pauseExecution,
      unstable_continueExecution,
      unstable_getCurrentPriorityLevel,
      unstable_IdlePriority,
      unstable_ImmediatePriority,
      unstable_LowPriority,
      unstable_NormalPriority,
      unstable_UserBlockingPriority,
    },
    SchedulerTracing: {
      __interactionsRef,
      __subscriberRef,
      unstable_clear,
      unstable_getCurrent,
      unstable_getThreadID,
      unstable_subscribe,
      unstable_trace,
      unstable_unsubscribe,
      unstable_wrap,
    },
>>>>>>> 29b7b775f2ecf878eaf605be959d959030598b07
  });
}

if (__DEV__) {
  Object.assign(ReactSharedInternals, {
    // These should not be included in production.
    ReactDebugCurrentFrame,
    // Shim for React DOM 16.0.0 which still destructured (but not used) this.
    // TODO: remove in React 17.0.
    ReactComponentTreeHook: {},
  });
}

export default ReactSharedInternals;
