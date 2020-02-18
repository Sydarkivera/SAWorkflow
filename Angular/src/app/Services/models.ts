
export interface DockerImage {
  id: string;
}

export interface DockerImportImage {
  body: string;
}

export interface Variables {
  work_dir_path: string;
  packages_path: string;
  premis_file_name: string;
  tools_path: string;
  work_dir_path_host: string;
  premis_template_path: string;
  premis_event_template_path: string;
}

export interface Module {
  name: string;
  hidden: boolean;
  form: string;
  command: string;
  type: string;
  python_module: string;
  multifile: string;
  filter: string;
  resultFilter: string;
  dockerImage: string;
  description: string;
  parallell_jobs: string;
  module_id: string;
}
