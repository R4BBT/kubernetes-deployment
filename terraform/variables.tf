# Variable used in terraform.tfvars
variable "billing_account" {
  description = "The ID of the billing account to associate projects with."
  type        = string
}

variable "bootstrap_project_id" {
  description = "Bootstrap project id"
  type        = string
}

variable "default_region" {
  description = "Default region to create resources where applicable."
  type        = string
}

variable "default_zone" {
  description = "Default zone to create resources where applicable."
  type        = string
}

variable "credentials" {
  description = "The credentials of the service account running terraform in customer environment."
  type        = string
  default     = "./key.json"
}

variable "enabled_services_set" {
  description = "The default services to be enabled in the project "
  type        = set(string)
}

variable "kubernetes_subnet_cidr" {
  description = "The map of subnets to be created in the project VPC"
  type = map(object({
    cidr_block           = string
    region               = string
    secondary_name       = string
    secondary_cidr_block = string
  }))
}

# Kubernetes specific configurations
variable "gke_num_nodes" {
  default     = 2
  description = "number of gke nodes"
  type        = number
}

variable "gke_cluster_name" {
  description = "name of GKE cluster"
  type        = string
}