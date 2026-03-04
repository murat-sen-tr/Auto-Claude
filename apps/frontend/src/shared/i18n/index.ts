import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import English translation resources
import enCommon from './locales/en/common.json';
import enNavigation from './locales/en/navigation.json';
import enSettings from './locales/en/settings.json';
import enTasks from './locales/en/tasks.json';
import enWelcome from './locales/en/welcome.json';
import enOnboarding from './locales/en/onboarding.json';
import enDialogs from './locales/en/dialogs.json';
import enGitlab from './locales/en/gitlab.json';
import enGithub from './locales/en/github.json';
import enTaskReview from './locales/en/taskReview.json';
import enTerminal from './locales/en/terminal.json';
import enErrors from './locales/en/errors.json';
import enChangelog from './locales/en/changelog.json';
import enIdeation from './locales/en/ideation.json';
import enProjectSettings from './locales/en/projectSettings.json';
import enWorktrees from './locales/en/worktrees.json';
import enContext from './locales/en/context.json';
import enRoadmap from './locales/en/roadmap.json';
import enInsights from './locales/en/insights.json';
import enWorkspaces from './locales/en/workspaces.json';

// Import French translation resources
import frCommon from './locales/fr/common.json';
import frNavigation from './locales/fr/navigation.json';
import frSettings from './locales/fr/settings.json';
import frTasks from './locales/fr/tasks.json';
import frWelcome from './locales/fr/welcome.json';
import frOnboarding from './locales/fr/onboarding.json';
import frDialogs from './locales/fr/dialogs.json';
import frGitlab from './locales/fr/gitlab.json';
import frGithub from './locales/fr/github.json';
import frTaskReview from './locales/fr/taskReview.json';
import frTerminal from './locales/fr/terminal.json';
import frErrors from './locales/fr/errors.json';
import frChangelog from './locales/fr/changelog.json';
import frIdeation from './locales/fr/ideation.json';
import frProjectSettings from './locales/fr/projectSettings.json';
import frWorktrees from './locales/fr/worktrees.json';
import frContext from './locales/fr/context.json';
import frRoadmap from './locales/fr/roadmap.json';
import frInsights from './locales/fr/insights.json';
import frWorkspaces from './locales/fr/workspaces.json';

// Import Turkish translation resources
import trCommon from './locales/tr/common.json';
import trNavigation from './locales/tr/navigation.json';
import trSettings from './locales/tr/settings.json';
import trTasks from './locales/tr/tasks.json';
import trWelcome from './locales/tr/welcome.json';
import trOnboarding from './locales/tr/onboarding.json';
import trDialogs from './locales/tr/dialogs.json';
import trGitlab from './locales/tr/gitlab.json';
import trGithub from './locales/tr/github.json';
import trTaskReview from './locales/tr/taskReview.json';
import trTerminal from './locales/tr/terminal.json';
import trErrors from './locales/tr/errors.json';
import trChangelog from './locales/tr/changelog.json';
import trIdeation from './locales/tr/ideation.json';
import trProjectSettings from './locales/tr/projectSettings.json';
import trWorktrees from './locales/tr/worktrees.json';
import trContext from './locales/tr/context.json';
import trRoadmap from './locales/tr/roadmap.json';
import trInsights from './locales/tr/insights.json';
import trWorkspaces from './locales/tr/workspaces.json';

export const defaultNS = 'common';

export const resources = {
  "en": {
    common: enCommon,
    navigation: enNavigation,
    settings: enSettings,
    tasks: enTasks,
    welcome: enWelcome,
    onboarding: enOnboarding,
    dialogs: enDialogs,
    gitlab: enGitlab,
    github: enGithub,
    taskReview: enTaskReview,
    terminal: enTerminal,
    errors: enErrors,
    changelog: enChangelog,
    ideation: enIdeation,
    projectSettings: enProjectSettings,
    worktrees: enWorktrees,
    context: enContext,
    roadmap: enRoadmap,
    insights: enInsights,
    workspaces: enWorkspaces
  },
  "fr": {
    common: frCommon,
    navigation: frNavigation,
    settings: frSettings,
    tasks: frTasks,
    welcome: frWelcome,
    onboarding: frOnboarding,
    dialogs: frDialogs,
    gitlab: frGitlab,
    github: frGithub,
    taskReview: frTaskReview,
    terminal: frTerminal,
    errors: frErrors,
    changelog: frChangelog,
    ideation: frIdeation,
    projectSettings: frProjectSettings,
    worktrees: frWorktrees,
    context: frContext,
    roadmap: frRoadmap,
    insights: frInsights,
    workspaces: frWorkspaces
  },
  "tr": {
    common: trCommon,
    navigation: trNavigation,
    settings: trSettings,
    tasks: trTasks,
    welcome: trWelcome,
    onboarding: trOnboarding,
    dialogs: trDialogs,
    gitlab: trGitlab,
    github: trGithub,
    taskReview: trTaskReview,
    terminal: trTerminal,
    errors: trErrors,
    changelog: trChangelog,
    ideation: trIdeation,
    projectSettings: trProjectSettings,
    worktrees: trWorktrees,
    context: trContext,
    roadmap: trRoadmap,
    insights: trInsights,
    workspaces: trWorkspaces
  }
} as const;

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language (will be overridden by settings)
    fallbackLng: 'en',
    defaultNS,
    ns: ['common', 'navigation', 'settings', 'tasks', 'welcome', 'onboarding', 'dialogs', 'gitlab', 'github', 'taskReview', 'terminal', 'errors', 'changelog', 'ideation', 'projectSettings', 'worktrees', 'context', 'roadmap', 'insights', 'workspaces'],
    interpolation: {
      escapeValue: false // React already escapes values
    },
    react: {
      useSuspense: false // Disable suspense for Electron compatibility
    }
  });

export default i18n;
