# Running TF on workstation: Recommend to authenticate with application default login
# Running TF outside of GCP: Recommend external configuration file or service account key and set GOOGLE_APPLICATION_CREDENTIALS environment variable to SA key path
provider "google" {
  project         = var.bootstrap_project_id
  region          = var.default_region
  zone            = var.default_zone
  credentials     = var.credentials
  billing_project = var.bootstrap_project_id
}

resource "random_string" "kubernetes_suffix" {
  length  = 3
  special = false
  lower   = true
  upper   = false
  numeric = true
}

terraform {
  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "4.32.0"
    }
  }

  required_version = ">= 1.0"
}
